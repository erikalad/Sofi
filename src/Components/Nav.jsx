import React from "react"
import './Nav.css'
import img from './../Imagenes/sofia.png'
import { Link, NavLink } from "react-router-dom"
import MisMetas from "./MisMetas"
import { useLocation } from 'react-router-dom';

export default function Nav(){

    const location = useLocation();
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary nav">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={img} alt="sofia" className="sofia" />
              <spline-viewer url="https://prod.spline.design/U9O6K7fXziMEU7Wu/scene.splinecode"></spline-viewer>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link
                  class={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
                <Link
                  to={'/misMetas'}
                  class={`nav-link ${location.pathname === '/misMetas' ? 'active' : ''}`}
                >
                  Mis Metas
                </Link>
                <Link
                  to={'/misAnimos'}
                  class={`nav-link ${location.pathname === '/misAnimos' ? 'active' : ''}`}
                >
                  Mis estados de ánimo
                </Link>
              </div>
            </div>
          </div>
        </nav>
      );
    }