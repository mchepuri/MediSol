/**
 * @flow
 * @relayHash 0fbcf276e4af2a61863a69705efc8e3b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateDoctorsMutationVariables = {|
  input: {
    datelicensed: any;
    description: string;
    firstname: string;
    lastname: string;
    subTitle: string;
    title: string;
    visitCharge: number;
    clientMutationId: string;
  };
|};
export type CreateDoctorsMutationResponse = {|
  +createDoctors: ?{|
    +doctors: ?{|
      +lastname: string;
    |};
  |};
|};
*/


/*
mutation CreateDoctorsMutation(
  $input: CreateDoctorsInput!
) {
  createDoctors(input: $input) {
    doctors {
      lastname
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateDoctorsInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateDoctorsMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateDoctorsInput!"
          }
        ],
        "concreteType": "CreateDoctorsPayload",
        "name": "createDoctors",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Doctors",
            "name": "doctors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "lastname",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateDoctorsMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateDoctorsInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateDoctorsMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateDoctorsInput!"
          }
        ],
        "concreteType": "CreateDoctorsPayload",
        "name": "createDoctors",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Doctors",
            "name": "doctors",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "lastname",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateDoctorsMutation(\n  $input: CreateDoctorsInput!\n) {\n  createDoctors(input: $input) {\n    doctors {\n      lastname\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
