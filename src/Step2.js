import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Step2() {
  let navigate = useNavigate();
  const { state } = useLocation();
  const [phno, setPhno] = useState("");
  const [add, setAdd] = useState("");
  const fun1 = () => {
    if (phno.length === 0 || add.length === 0) {
      alert("Please fill all details");
    } else {
      alert(
        `name is ${state.name} lastname is ${state.lname} address is ${add}`
      );
      navigate("/");
    }
  };

  //const { name } = data;
  console.log("data is", state);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card flex-row my-4 border-0 shadow rounded-3 overflow-hidden">
            <div className="col-lg-12 col-xl-12 mx-auto">
              <div className="card-body p-4 p-sm-5">
                <form className="was-validated">
                  <div className="form-group">
                    <label for="floatingInputPh">Phone number</label>
                    <div className="form-floating mb-3 ">
                      <input
                        type="tel"
                        pattern=".{10}"
                        value={phno}
                        onChange={(e) => setPhno(e.target.value)}
                        className="form-control  "
                        id="floatingInputPh"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                    <label for="floatingInputName">Your Address</label>
                    <div className="form-floating mb-3 ">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={add}
                        onChange={(e) => setAdd(e.target.value)}
                        placeholder="Address"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={fun1}
                    >
                      Submit
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
