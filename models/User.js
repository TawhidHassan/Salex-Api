const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    employeeId: {
      type: String,
      required: true,
      unique: true
    },
    age: {
      type: String,
      required: true,
    },
    photo: {
      required: false,
    },
    joiningdate: {
      type: Date,
      required: true,
    },
    dob: {
      type: Date
    },
    mobileno: {
      type: String,
      required: true,
    },
    businessunit: {
      type: String,
      enum: ['SEC_UNIT', 'CE_UNIT', 'VM_UNIT'],
      default: 'SEC_UNIT'
    },
    officemail: {
      type: String,
      required: false,
    },
    area: {
      tupe: String,
      required: false,
    },
    teritory: {
      type: String,
      required: false,
    },
    linemanagerid: {
      type: String,
      required: false,
    },
    supermanegerid: {
      type: String,
      required: true,
    },
    toplevelmanagerid: {
      type: String,
      required: false,
    },
    salarytier: {
      type: String,
      required: false,
    },
    remarks: {
      type: String,
      required: false,
    },
    dayoff: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      default: "user",
      required: true,
      enum: ["user", "admin", 'SEC', 'SOM', 'AM', 'TSO', 'LOGISTIC-M', 'VM', 'TRAINER', 'MIS', 'admin', 'FOM']
    },
    password: {
      type: String,
      required: true
    },
    stores: [
      {
        required: false,
        store: {
          ref: "Store",
          type: Schema.Types.ObjectId,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("users", UserSchema);