/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "./fetch.pb"
import * as GoogleProtobufEmpty from "./google/protobuf/empty.pb"
export class Echo {
  static Echo(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, GoogleProtobufEmpty.Empty>(`/v1/example/echo?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
}