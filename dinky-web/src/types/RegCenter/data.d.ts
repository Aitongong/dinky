/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * about alert
 */
declare namespace Alert {
  /**
   * alert group
   */
  export type AlertGroup = {
    id: number,
    name: string,
    alertInstanceIds: string,
    note: string,
    enabled: boolean,
    createTime: Date,
    updateTime: Date,
  };

  /**
   * alert instance
   */
  export type AlertInstance = {
    id: number,
    name: string,
    type: string,
    params: string,
    enabled: boolean,
    createTime: Date,
    updateTime: Date,
  };
}

/**
 * about flink cluster
 */
declare namespace Cluster {
  /**
   * flink cluster instance
   * mainly used for `yarn session` `standalone`
   */
  export type ClusterInstance = {
    id: number,
    name: string,
    alias: string,
    type: string,
    hosts: string,
    jobManagerHost: string,
    autoRegisters: boolean,
    version: string,
    status: number,
    note: string,
    enabled: boolean,
    createTime: Date,
    updateTime: Date,
  };

  /**
   * flink cluster config
   * mainly used for `projob` `application` `k8s` and start a new session cluster
   */
  export type ClusterConfig = {
    id: number,
    name: string,
    type: string,
    config: any,
    configJson: string,
    isAvailable: boolean,
    note: string,
    enabled: boolean,
    createTime: Date,
    updateTime: Date,
  };
}

/**
 * about database and metadata
 */
declare namespace DataBases {

  /**
   * database info
   */
  export type DataBase = {
    id: number,
    name: string,
    groupName: string,
    type: string,
    url: string,
    username: string,
    password: string,
    note: string,
    flinkConfig: string,
    flinkTemplate: string,
    dbVersion: string,
    status: boolean,
    healthTime: Date,
    heartbeatTime: Date,
    enabled: boolean,
    createTime: Date,
    updateTime: Date,
  };


  /**
   * table info
   */
  export type Table = {
    name: string,
    schema: string,
    catalog: string,
    comment: string,
    type: string,
    engine: string,
    options: string,
    rows: number,
    createTime: string,
    updateTime: string,
  };

  /**
   * table columns info
   */
  export type Column = {
    name: string,
    type: string,
    comment: string,
    keyFlag: boolean,
    autoIncrement: boolean,
    defaultValue: string,
    nullable: string,
    javaType: string,
    columnFamily: string,
    position: number,
    precision: number,
    scale: number,
    characterSet: string,
    collation: string,
  };

}


/**
 * about document
 */
export type Document = {
  id: number,
  name: string,
  category: string,
  type: string,
  subtype: string,
  description: string,
  fillValue: string,
  version: string,
  likeNum: number,
  enabled: boolean,
  createTime: Date,
  updateTime: Date,
};


/**
 * global variable
 */
export type GlobalVar = {
  id: number,
  name: string,
  fragmentValue: string,
  note: string,
  enabled: boolean,
  createTime: Date,
  updateTime: Date,
};

