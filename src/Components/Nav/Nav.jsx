import "./Nav.css";

export function Nav() {
  return (
    <div className="nav-bar">
    <div className="nav-wrapper">
      <div className="flex-wrapper ico">
        <button className="interactive clickable">logo</button>
      </div>

      <div className="flex-wrapper">
        <div className="wrapper">
          <ul className="nav-list">
            <li>
              <button className="interactive clickable"><p className="word">Work</p></button>
            </li>
            <li>
              <button className="interactive clickable">
                <p className="word">Work</p>
              </button>
            </li>
            <li>
              <button className="interactive clickable"><p className="word">Work</p></button>
            </li>
            <li className="mobile">
              <a href="" target="_blank">
                Email
              </a>
            </li>
            <li><p className="word">Work</p></li>
          </ul>
        </div>

        <div className="mask">
				<button className="interactive hb-button clickable">
					<div className="hb">
						<span>---</span>
						<span></span>
						<span></span>
					</div>
				</button>
			</div>
      </div>
    </div>
    </div>
  );
}
