import displayDifines from "./components/apps/difines";
import displayPartner from "./components/apps/partner";
import displayChat from './components/apps/chat';
import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
import { displayGedit } from "./components/apps/gedit";
import { displayAboutVictor } from "./components/apps/victor";
import { displayTerminalCalc } from "./components/apps/calc";

const apps = [
  {
    id: "about-Victor",
    title: "About Victor",
    icon: "./images/logos/VictorAndrei.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutVictor,
  },
  {
    id: "chrome",
    title: "Google Chrome",
    icon: "./themes/Andrei/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "calc",
    title: "Calc",
    icon: "./themes/Andrei/apps/calc.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/Andrei/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "difines",
    title: "SHIBUYA Ecosystem",
    icon: "./themes/Andrei/apps/shibuya.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayDifines,
  },
  {
    id: "chatfi",
    title: "Chat Fi",
    icon: "./themes/Andrei/apps/chat.jpeg",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChat,
  },
  {
    id: "partner",
    title: "Partner",
    icon: "./themes/Andrei/apps/partner.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayPartner,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/Andrei/apps/bash.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },

  {
    id: "settings",
    title: "Settings",
    icon: "./themes/Andrei/apps/gnome-control-center.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "gedit",
    title: "Contact Me",
    icon: "./themes/Andrei/apps/gedit.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/Andrei/system/user-trash-full.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
];

export default apps;
