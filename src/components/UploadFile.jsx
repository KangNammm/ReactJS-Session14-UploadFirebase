import React, { useState } from "react";
import "./upload.css";
import { createUser } from "../services/usersService";

export default function UploadFile() {


  return (
    <>
      <div className="container-login">
        <form className="form-login">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Đăng kí</h3>
            <div className="btn btn-close"></div>
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="username">
              User Name
            </label>
            <input
              className={`form-control`}
              id="username"
              type="text"
              placeholder="Nhập tên"
              name="UserName"
            />
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="image">
              Image
            </label>
            <input
              className={`form-control`}
              id="image"
              type="file"
              name="image"
            />
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <input
              className={`form-control`}
              id="gender"
              type="text"
              placeholder="Nhập giới tính"
              name="Gender"
            />
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="dateOfBirth">
              Date of birth
            </label>
            <input
              className={`form-control`}
              id="dateOfBirth"
              type="text"
              placeholder="Nhập ngày, tháng, năm sinh"
              name="DateOfBirth"
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label" htmlFor="password">
              Mật khẩu
            </label>
            <input
              className={`form-control`}
              id="password"
              type="text"
              placeholder="Nhập mật khẩu"
              name="password"
            />
          </div>
          <div>
            <button style={{ width: "100%" }} className="btn btn-info">
              Đăng kí
            </button>
          </div>
          <div>
            <p className="p-2 text-center">
              Bạn đã có tài khoản? <a href="">Đăng kí</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
