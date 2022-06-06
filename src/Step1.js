import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
export default function Step1() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const fun1 = () => {
    if (name.length === 0 || lname.length === 0 || email.length === 0) {
      alert("please fill details");
    } else {
      navigate("/step2", { state: { name: name, lname: lname, email: email } });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card flex-row my-4 border-0 shadow rounded-3 overflow-hidden">
            <div className="col-lg-12 col-xl-12 mx-auto">
              <div className="card-body p-4 p-sm-5">
                <form className="was-validated">
                  <div className="form-group">
                    <label for="floatingInputName">Your name</label>
                    <div className="form-floating mb-3 ">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control "
                        id="floatingInputName"
                        placeholder="name"
                        required
                      />
                    </div>
                    <label for="floatingInputName">Your Lastname</label>
                    <div className="form-floating mb-3 ">
                      <input
                        type="text"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        className="form-control "
                        id="floatingInputName"
                        placeholder="Last name"
                        required
                      />
                    </div>

                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  {/* <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div> */}
                  <div class="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary "
                      onClick={fun1}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
