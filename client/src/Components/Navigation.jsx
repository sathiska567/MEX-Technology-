import React from "react";
import img from "../assets/logo.png";
import "./navi.css";


export default function Navigation() {
  return (
    <div>
      <table>
        <tr>
          <td className="table-img-td">
            <img
              src={img}
              alt=""
              width="120"
              height="120"
              class="d-inline-block align-text-top"
            />
          </td>

          <td className="table-nav-td">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link table-nav-text" aria-current="page" href="#">
                  Home
                </a>
                
              </li>

              <li className="nav-item">
                <a className="nav-link table-nav-text" aria-current="page" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item">
              <button type="button" className="btn btn-success sign-in">SIgn</button>

              </li>
              <li className="nav-item">
              <button type="button" className="btn btn-success sign-up">Sign Up</button>

              </li>

            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}
