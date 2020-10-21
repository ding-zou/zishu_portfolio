//展示社交账号图标
import React, { useEffect, useState } from "react";
import styles from "../styles/social.module.css";
import { RiDribbbleLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Tooltip } from "react-tippy";
const copy = require("copy-text-to-clipboard");
export default () => {
  const [tip, setTip] = useState(false);
  useEffect(() => {
    const btn = document.getElementById("copy-email");
    btn.addEventListener("click", () => {
      copy("fubozou@gmail.com");
    });
  }, []);
  return (
    <ul className={styles.social_container}>
      <Tooltip
        disabled={tip}
        title="已复制到剪切板"
        position="top"
        trigger="click"
        arrow={true}
        distance={20}
      >
        <li
          className={styles.button_bg}
          id="copy-email"
          onMouseEnter={() => {
            setTip(false);
          }}
          onMouseLeave={() => {
            setTip(true);
          }}
        >
          <div className={styles.button_mask}>
            <FiMail color="white" size="1.5rem" />
          </div>
        </li>
      </Tooltip>
    </ul>
  );
};
