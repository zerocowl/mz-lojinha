import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { DeviceController } from "../device.controller";
import { DeviceService } from "../device.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  activateDate: new Date(),
  createdAt: new Date(),
  expireDate: new Date(),
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  updatedAt: new Date(),
  uuid: "exampleUuid",
  version: 42,
};
const CREATE_RESULT = {
  activateDate: new Date(),
  createdAt: new Date(),
  expireDate: new Date(),
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  updatedAt: new Date(),
  uuid: "exampleUuid",
  version: 42,
};
const FIND_MANY_RESULT = [
  {
    activateDate: new Date(),
    createdAt: new Date(),
    expireDate: new Date(),
    id: "exampleId",
    isActive: "true",
    name: "exampleName",
    updatedAt: new Date(),
    uuid: "exampleUuid",
    version: 42,
  },
];
const FIND_ONE_RESULT = {
  activateDate: new Date(),
  createdAt: new Date(),
  expireDate: new Date(),
  id: "exampleId",
  isActive: "true",
  name: "exampleName",
  updatedAt: new Date(),
  uuid: "exampleUuid",
  version: 42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Device", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeviceService,
          useValue: service,
        },
      ],
      controllers: [DeviceController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /devices", async () => {
    await request(app.getHttpServer())
      .post("/devices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        activateDate: CREATE_RESULT.activateDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expireDate: CREATE_RESULT.expireDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /devices", async () => {
    await request(app.getHttpServer())
      .get("/devices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          activateDate: FIND_MANY_RESULT[0].activateDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expireDate: FIND_MANY_RESULT[0].expireDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /devices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/devices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /devices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/devices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        activateDate: FIND_ONE_RESULT.activateDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expireDate: FIND_ONE_RESULT.expireDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
