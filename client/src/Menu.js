import { Link } from "react-router-dom";
import { useRef } from "react";


export default function Menu() {
  const menuwrap = useRef(null);
  const menu = useRef(null);

  function toggleMenu() {
      menu.current.classList.toggle("menu-open");
      menuwrap.current.classList.toggle("slide");
  }
  return(
    <>
      <div className="nav">
          <div className="burgerIcon">
              <div className="divIcon" onClick={() => toggleMenu()}>
                  <div className="burgerDiv burgerMargin" id="1"></div>
                  <div className="burgerDiv burgerMargin" id="2"></div>
                  <div className="burgerDiv" id="3"></div>
              </div>
          </div>
          <div className="menuWrap" ref={menuwrap}>
              <div className="menu" ref={menu}>
                  <div className="close">
                      <svg id="cross" onClick={() => toggleMenu()} data-name="Calque 1 - copie" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502.05 502.05">
                          <rect x="891" y="156" width="88" height="622" transform="translate(-740.34 581.95) rotate(-45)"/>
                          <rect x="624" y="423" width="622" height="88" transform="translate(-740.34 581.95) rotate(-45)"/>
                      </svg>
                  </div>
                  <div class="links">
                        <ul>
                            <li class="menuLink">
                              <Link to="/">// home</Link>
                            </li>
                            <li class="menuLink">
                              <Link to="/maps">// maps</Link>
                            </li>
                            <li class="menuLink">
                              <Link to="/history">// history</Link>
                            </li>
                        </ul>
                    </div>
              </div>
          </div>
      </div>
    </>
  )
}
