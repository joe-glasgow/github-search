# Base Web App

Circle CI Build Status:
[![CircleCI](https://circleci.com/gh/joe-glasgow/base-web-app/tree/main.svg?style=svg)](https://circleci.com/gh/joe-glasgow/base-web-app/tree/main)

## Features

This project has out-of-the-box support for the following libs, tools and packages:

React 17,
Reselect,
Docker,
Babel 7,
Webpack 5,
ESLint 7,
React Fast Refresh,
TypeScript (via Babel),
Prettier,
Jest 24,
React Testing Library,
React i18next,
SSR,
HMR,
CSS Modules,
PostCSS,
Husky,
Storybook

## UI

The application comes bundled with [StoryBook](https://storybook.js.org/).

![alt text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMDAgNDAiPjx0aXRsZT5zdG9yeWJvb2stbG9nby9kZWZhdWx0PC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZGVmcz48cGF0aCBpZD0icGF0aC0xIiBkPSJNMS4yNDA1NTg1LDM2Ljg1ODY3NTYgTDAuMDAxNDQwMTg5NzYsMy44NDE3ODQ5MiBDLTAuMDM5NDgzMDI3NSwyLjc1MTM2NjUzIDAuNzk2NjEwNzQ5LDEuODI3MjQ5NjYgMS44ODU2NzE3OSwxLjc1OTE4MzM0IEwyOS45Njg4NTAxLDAuMDAzOTg0Njk5OTUgQzMxLjA3NzM4NDIsLTAuMDY1Mjk4NjgzOCAzMi4wMzIxOTQsMC43NzcxODA1MTMgMzIuMTAxNDc3NCwxLjg4NTcxNDY1IEMzMi4xMDQwODc3LDEuOTI3NDc5OTQgMzIuMTA1MzkzOCwxLjk2OTMxNjUzIDMyLjEwNTM5MzgsMi4wMTExNjMzMiBMMzIuMTA1MzkzOCwzNy45ODg5MDQ5IEMzMi4xMDUzOTM4LDM5LjA5OTYwMjEgMzEuMjA0OTk1OSw0MCAzMC4wOTQyOTg3LDQwIEMzMC4wNjQyMDk1LDQwIDMwLjAzNDEyNCwzOS45OTkzMjQ3IDMwLjAwNDA2NSwzOS45OTc5NzQ3IEwzLjE2MDAwNTA0LDM4Ljc5MjMyMjQgQzIuMTE0NTM1MDYsMzguNzQ1MzY3IDEuMjc5ODA2NzQsMzcuOTA0NDYzMyAxLjI0MDU1ODUsMzYuODU4Njc1NiBaIi8+PC9kZWZzPjxnIGlkPSJzdG9yeWJvb2stbG9nby9kZWZhdWx0IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBpZD0idGl0bGUiIGZpbGw9IiMzMzMiIGQ9Ik01My4yOCwzMS42NjMgQzUxLjU3MzMyNDgsMzEuNjYzIDQ5LjkzMDY3NDYsMzEuNDMzNjY5IDQ4LjM1MiwzMC45NzUgQzQ2Ljc3MzMyNTQsMzAuNTE2MzMxIDQ1LjQ2MTMzODYsMjkuODgxNjcwNyA0NC40MTYsMjkuMDcxIEw0Ni4wMTYsMjUuNTE5IEM0OC4xOTIwMTA5LDI3LjAzMzY3NDIgNTAuNjM0NjUzMSwyNy43OTEgNTMuMzQ0LDI3Ljc5MSBDNTQuNzUyMDA3LDI3Ljc5MSA1NS44MzQ2NjI5LDI3LjU2MTY2OSA1Ni41OTIsMjcuMTAzIEM1Ny4zNDkzMzcxLDI2LjY0NDMzMSA1Ny43MjgsMjYuMDA5NjcwNyA1Ny43MjgsMjUuMTk5IEM1Ny43MjgsMjQuNDczNjYzIDU3LjM4MTMzNjgsMjMuOTA4MzM1NCA1Ni42ODgsMjMuNTAzIEM1NS45OTQ2NjMyLDIzLjA5NzY2NDYgNTQuNzYyNjc1NSwyMi43MDMwMDE5IDUyLjk5MiwyMi4zMTkgQzUxLjAwNzk5MDEsMjEuOTEzNjY0NiA0OS40MjQwMDU5LDIxLjQyMzAwMjkgNDguMjQsMjAuODQ3IEM0Ny4wNTU5OTQxLDIwLjI3MDk5NzEgNDYuMTkyMDAyNywxOS41NjE2NzA5IDQ1LjY0OCwxOC43MTkgQzQ1LjEwMzk5NzMsMTcuODc2MzI5MSA0NC44MzIsMTYuODM2MzM5NSA0NC44MzIsMTUuNTk5IEM0NC44MzIsMTQuMjMzNjU5OCA0NS4yMTA2NjI5LDEzLjAxNzY3MiA0NS45NjgsMTEuOTUxIEM0Ni43MjUzMzcxLDEwLjg4NDMyOCA0Ny43ODY2NTk4LDEwLjA0NzAwMyA0OS4xNTIsOS40MzkgQzUwLjUxNzM0MDIsOC44MzA5OTY5NiA1Mi4wOTU5OTEsOC41MjcgNTMuODg4LDguNTI3IEM1NS40ODgwMDgsOC41MjcgNTcuMDI5MzI1OSw4Ljc2MTY2NDMyIDU4LjUxMiw5LjIzMSBDNTkuOTk0Njc0MSw5LjcwMDMzNTY4IDYxLjE3MzMyOSwxMC4zMjk2NjI3IDYyLjA0OCwxMS4xMTkgTDYwLjQ0OCwxNC42NzEgQzU4LjM3ODY1NjMsMTMuMTU2MzI1OCA1Ni4yMDI2NzgxLDEyLjM5OSA1My45MiwxMi4zOTkgQzUyLjYxODY2MDIsMTIuMzk5IDUxLjU5NDY3MDQsMTIuNjQ5NjY0MiA1MC44NDgsMTMuMTUxIEM1MC4xMDEzMjk2LDEzLjY1MjMzNTggNDkuNzI4LDE0LjM0MDMyOSA0OS43MjgsMTUuMjE1IEM0OS43MjgsMTUuNzI3MDAyNiA0OS44NzE5OTg2LDE2LjE0ODMzMTcgNTAuMTYsMTYuNDc5IEM1MC40NDgwMDE0LDE2LjgwOTY2ODMgNTAuOTI3OTk2NiwxNy4xMDI5OTg3IDUxLjYsMTcuMzU5IEM1Mi4yNzIwMDM0LDE3LjYxNTAwMTMgNTMuMjI2NjYwNSwxNy44ODE2NjUzIDU0LjQ2NCwxOC4xNTkgQzU3LjM2NTM0NzgsMTguNzk5MDAzMiA1OS40NTA2NjAzLDE5LjYyMDMyODMgNjAuNzIsMjAuNjIzIEM2MS45ODkzMzk3LDIxLjYyNTY3MTcgNjIuNjI0LDIzLjAxMjMyNDUgNjIuNjI0LDI0Ljc4MyBDNjIuNjI0LDI2LjkxNjM0NCA2MS44MDI2NzQ5LDI4LjU5NjMyNzIgNjAuMTYsMjkuODIzIEM1OC41MTczMjUxLDMxLjA0OTY3MjggNTYuMjI0MDE0NywzMS42NjMgNTMuMjgsMzEuNjYzIFogTTc0LjIwOCwyOC4wNzkgQzc0LjY5ODY2OTEsMjguMDc5IDc1LjIxMDY2NCwyOC4wNDcwMDAzIDc1Ljc0NCwyNy45ODMgTDc1LjQ4OCwzMS41MDMgQzc0Ljg2OTMzMDIsMzEuNTg4MzMzOCA3NC4yNTA2Njk4LDMxLjYzMSA3My42MzIsMzEuNjMxIEM3MS4yNDI2NTQ3LDMxLjYzMSA2OS40OTg2NzIyLDMxLjEwODMzODYgNjguNCwzMC4wNjMgQzY3LjMwMTMyNzgsMjkuMDE3NjYxNCA2Ni43NTIsMjcuNDI4MzQ0IDY2Ljc1MiwyNS4yOTUgTDY2Ljc1MiwxOS4yNzkgTDYzLjc3NiwxOS4yNzkgTDYzLjc3NiwxNS42NjMgTDY2Ljc1MiwxNS42NjMgTDY2Ljc1MiwxMS4wNTUgTDcxLjU4NCwxMS4wNTUgTDcxLjU4NCwxNS42NjMgTDc1LjUyLDE1LjY2MyBMNzUuNTIsMTkuMjc5IEw3MS41ODQsMTkuMjc5IEw3MS41ODQsMjUuMjYzIEM3MS41ODQsMjcuMTQwMzQyNyA3Mi40NTg2NTc5LDI4LjA3OSA3NC4yMDgsMjguMDc5IFogTTg1LjQ0LDMxLjYzMSBDODMuNzc1OTkxNywzMS42MzEgODIuMzE0NjczLDMxLjI5NTAwMzQgODEuMDU2LDMwLjYyMyBDNzkuNzk3MzI3LDI5Ljk1MDk5NjYgNzguODI2NjcwMSwyOS4wMDE2NzI4IDc4LjE0NCwyNy43NzUgQzc3LjQ2MTMyOTksMjYuNTQ4MzI3MiA3Ny4xMiwyNS4xMDMwMDgzIDc3LjEyLDIzLjQzOSBDNzcuMTIsMjEuNzc0OTkxNyA3Ny40NjEzMjk5LDIwLjMyOTY3MjggNzguMTQ0LDE5LjEwMyBDNzguODI2NjcwMSwxNy44NzYzMjcyIDc5Ljc5NzMyNywxNi45MzIzMzY2IDgxLjA1NiwxNi4yNzEgQzgyLjMxNDY3MywxNS42MDk2NjM0IDgzLjc3NTk5MTcsMTUuMjc5IDg1LjQ0LDE1LjI3OSBDODcuMTA0MDA4MywxNS4yNzkgODguNTY1MzI3LDE1LjYwOTY2MzQgODkuODI0LDE2LjI3MSBDOTEuMDgyNjczLDE2LjkzMjMzNjYgOTIuMDUzMzI5OSwxNy44NzYzMjcyIDkyLjczNiwxOS4xMDMgQzkzLjQxODY3MDEsMjAuMzI5NjcyOCA5My43NiwyMS43NzQ5OTE3IDkzLjc2LDIzLjQzOSBDOTMuNzYsMjUuMTAzMDA4MyA5My40MTg2NzAxLDI2LjU0ODMyNzIgOTIuNzM2LDI3Ljc3NSBDOTIuMDUzMzI5OSwyOS4wMDE2NzI4IDkxLjA4MjY3MywyOS45NTA5OTY2IDg5LjgyNCwzMC42MjMgQzg4LjU2NTMyNywzMS4yOTUwMDM0IDg3LjEwNDAwODMsMzEuNjMxIDg1LjQ0LDMxLjYzMSBaIE04NS40NCwyNy45NTEgQzg3Ljc4NjY3ODQsMjcuOTUxIDg4Ljk2LDI2LjQ0NzAxNSA4OC45NiwyMy40MzkgQzg4Ljk2LDIxLjkyNDMyNTggODguNjU2MDAzLDIwLjc5MzY3MDQgODguMDQ4LDIwLjA0NyBDODcuNDM5OTk3LDE5LjMwMDMyOTYgODYuNTcwNjcyMywxOC45MjcgODUuNDQsMTguOTI3IEM4My4wOTMzMjE2LDE4LjkyNyA4MS45MiwyMC40MzA5ODUgODEuOTIsMjMuNDM5IEM4MS45MiwyNi40NDcwMTUgODMuMDkzMzIxNiwyNy45NTEgODUuNDQsMjcuOTUxIFogTTEwNy4xMzYsMTkuMjQ3IEwxMDQuNDE2LDE5LjUzNSBDMTAzLjA3MTk5MywxOS42NjMwMDA2IDEwMi4xMjI2NjksMjAuMDQxNjYzNSAxMDEuNTY4LDIwLjY3MSBDMTAxLjAxMzMzMSwyMS4zMDAzMzY1IDEwMC43MzYsMjIuMTM3NjYxNCAxMDAuNzM2LDIzLjE4MyBMMTAwLjczNiwzMS4zNzUgTDk1LjkwNCwzMS4zNzUgTDk1LjkwNCwxNS42NjMgTDEwMC41NDQsMTUuNjYzIEwxMDAuNTQ0LDE4LjMxOSBDMTAxLjMzMzMzNywxNi41MDU2NTc2IDEwMi45NjUzMjEsMTUuNTEzNjY3NSAxMDUuNDQsMTUuMzQzIEwxMDYuODQ4LDE1LjI0NyBMMTA3LjEzNiwxOS4yNDcgWiBNMTIxLjE3NiwxNS42OTUgTDEyNS45MTIsMTUuNjk1IEwxMTYuNDQsMzcuMTM1IEwxMTEuNTQ0LDM3LjEzNSBMMTE0LjU1MiwzMC41MTEgTDEwOC4wODgsMTUuNjk1IEwxMTMuMTEyLDE1LjY5NSBMMTE3LjA4LDI1LjY3OSBMMTIxLjE3NiwxNS42OTUgWiBNMTM3LjExMiwxNS4yNzkgQzEzOC40NzczNCwxNS4yNzkgMTM5LjY4MjY2MSwxNS42MDk2NjM0IDE0MC43MjgsMTYuMjcxIEMxNDEuNzczMzM5LDE2LjkzMjMzNjYgMTQyLjU4OTMzLDE3Ljg3NjMyNzIgMTQzLjE3NiwxOS4xMDMgQzE0My43NjI2NywyMC4zMjk2NzI4IDE0NC4wNTYsMjEuNzUzNjU4NiAxNDQuMDU2LDIzLjM3NSBDMTQ0LjA1NiwyNC45OTYzNDE0IDE0My43NjI2NywyNi40MzA5OTM4IDE0My4xNzYsMjcuNjc5IEMxNDIuNTg5MzMsMjguOTI3MDA2MiAxNDEuNzY4MDA1LDI5Ljg5NzY2MzIgMTQwLjcxMiwzMC41OTEgQzEzOS42NTU5OTUsMzEuMjg0MzM2OCAxMzguNDU2MDA3LDMxLjYzMSAxMzcuMTEyLDMxLjYzMSBDMTM2LjAyMzk5NSwzMS42MzEgMTM1LjA0MjY3MSwzMS40MDE2NjkgMTM0LjE2OCwzMC45NDMgQzEzMy4yOTMzMjksMzAuNDg0MzMxIDEzMi42MjEzMzYsMjkuODQ5NjcwNyAxMzIuMTUyLDI5LjAzOSBMMTMyLjE1MiwzMS4zNzUgTDEyNy4zODQsMzEuMzc1IEwxMjcuMzg0LDguODE1IEwxMzIuMjE2LDguODE1IEwxMzIuMjE2LDE3Ljc3NSBDMTMyLjY4NTMzNiwxNi45ODU2NjI3IDEzMy4zNTE5OTYsMTYuMzcyMzM1NSAxMzQuMjE2LDE1LjkzNSBDMTM1LjA4MDAwNCwxNS40OTc2NjQ1IDEzNi4wNDUzMjgsMTUuMjc5IDEzNy4xMTIsMTUuMjc5IFogTTEzNS43MDQsMjcuOTUxIEMxMzYuODM0NjcyLDI3Ljk1MSAxMzcuNzA5MzMsMjcuNTUxMDA0IDEzOC4zMjgsMjYuNzUxIEMxMzguOTQ2NjcsMjUuOTUwOTk2IDEzOS4yNTYsMjQuODI1NjczOSAxMzkuMjU2LDIzLjM3NSBDMTM5LjI1NiwyMS45NDU2NTk1IDEzOC45NDY2NywyMC44NTIzMzcxIDEzOC4zMjgsMjAuMDk1IEMxMzcuNzA5MzMsMTkuMzM3NjYyOSAxMzYuODM0NjcyLDE4Ljk1OSAxMzUuNzA0LDE4Ljk1OSBDMTM0LjU3MzMyOCwxOC45NTkgMTMzLjY5ODY3LDE5LjM0ODMyOTQgMTMzLjA4LDIwLjEyNyBDMTMyLjQ2MTMzLDIwLjkwNTY3MDYgMTMyLjE1MiwyMi4wMDk2NTk1IDEzMi4xNTIsMjMuNDM5IEMxMzIuMTUyLDI0Ljg4OTY3MzkgMTMyLjQ2MTMzLDI2LjAwNDMyOTQgMTMzLjA4LDI2Ljc4MyBDMTMzLjY5ODY3LDI3LjU2MTY3MDYgMTM0LjU3MzMyOCwyNy45NTEgMTM1LjcwNCwyNy45NTEgWiBNMTU0LjU1MiwzMS42MzEgQzE1Mi44ODc5OTIsMzEuNjMxIDE1MS40MjY2NzMsMzEuMjk1MDAzNCAxNTAuMTY4LDMwLjYyMyBDMTQ4LjkwOTMyNywyOS45NTA5OTY2IDE0Ny45Mzg2NywyOS4wMDE2NzI4IDE0Ny4yNTYsMjcuNzc1IEMxNDYuNTczMzMsMjYuNTQ4MzI3MiAxNDYuMjMyLDI1LjEwMzAwODMgMTQ2LjIzMiwyMy40MzkgQzE0Ni4yMzIsMjEuNzc0OTkxNyAxNDYuNTczMzMsMjAuMzI5NjcyOCAxNDcuMjU2LDE5LjEwMyBDMTQ3LjkzODY3LDE3Ljg3NjMyNzIgMTQ4LjkwOTMyNywxNi45MzIzMzY2IDE1MC4xNjgsMTYuMjcxIEMxNTEuNDI2NjczLDE1LjYwOTY2MzQgMTUyLjg4Nzk5MiwxNS4yNzkgMTU0LjU1MiwxNS4yNzkgQzE1Ni4yMTYwMDgsMTUuMjc5IDE1Ny42NzczMjcsMTUuNjA5NjYzNCAxNTguOTM2LDE2LjI3MSBDMTYwLjE5NDY3MywxNi45MzIzMzY2IDE2MS4xNjUzMywxNy44NzYzMjcyIDE2MS44NDgsMTkuMTAzIEMxNjIuNTMwNjcsMjAuMzI5NjcyOCAxNjIuODcyLDIxLjc3NDk5MTcgMTYyLjg3MiwyMy40MzkgQzE2Mi44NzIsMjUuMTAzMDA4MyAxNjIuNTMwNjcsMjYuNTQ4MzI3MiAxNjEuODQ4LDI3Ljc3NSBDMTYxLjE2NTMzLDI5LjAwMTY3MjggMTYwLjE5NDY3MywyOS45NTA5OTY2IDE1OC45MzYsMzAuNjIzIEMxNTcuNjc3MzI3LDMxLjI5NTAwMzQgMTU2LjIxNjAwOCwzMS42MzEgMTU0LjU1MiwzMS42MzEgWiBNMTU0LjU1MiwyNy45NTEgQzE1Ni44OTg2NzgsMjcuOTUxIDE1OC4wNzIsMjYuNDQ3MDE1IDE1OC4wNzIsMjMuNDM5IEMxNTguMDcyLDIxLjkyNDMyNTggMTU3Ljc2ODAwMywyMC43OTM2NzA0IDE1Ny4xNiwyMC4wNDcgQzE1Ni41NTE5OTcsMTkuMzAwMzI5NiAxNTUuNjgyNjcyLDE4LjkyNyAxNTQuNTUyLDE4LjkyNyBDMTUyLjIwNTMyMiwxOC45MjcgMTUxLjAzMiwyMC40MzA5ODUgMTUxLjAzMiwyMy40MzkgQzE1MS4wMzIsMjYuNDQ3MDE1IDE1Mi4yMDUzMjIsMjcuOTUxIDE1NC41NTIsMjcuOTUxIFogTTE3Mi41NjgsMzEuNjMxIEMxNzAuOTAzOTkyLDMxLjYzMSAxNjkuNDQyNjczLDMxLjI5NTAwMzQgMTY4LjE4NCwzMC42MjMgQzE2Ni45MjUzMjcsMjkuOTUwOTk2NiAxNjUuOTU0NjcsMjkuMDAxNjcyOCAxNjUuMjcyLDI3Ljc3NSBDMTY0LjU4OTMzLDI2LjU0ODMyNzIgMTY0LjI0OCwyNS4xMDMwMDgzIDE2NC4yNDgsMjMuNDM5IEMxNjQuMjQ4LDIxLjc3NDk5MTcgMTY0LjU4OTMzLDIwLjMyOTY3MjggMTY1LjI3MiwxOS4xMDMgQzE2NS45NTQ2NywxNy44NzYzMjcyIDE2Ni45MjUzMjcsMTYuOTMyMzM2NiAxNjguMTg0LDE2LjI3MSBDMTY5LjQ0MjY3MywxNS42MDk2NjM0IDE3MC45MDM5OTIsMTUuMjc5IDE3Mi41NjgsMTUuMjc5IEMxNzQuMjMyMDA4LDE1LjI3OSAxNzUuNjkzMzI3LDE1LjYwOTY2MzQgMTc2Ljk1MiwxNi4yNzEgQzE3OC4yMTA2NzMsMTYuOTMyMzM2NiAxNzkuMTgxMzMsMTcuODc2MzI3MiAxNzkuODY0LDE5LjEwMyBDMTgwLjU0NjY3LDIwLjMyOTY3MjggMTgwLjg4OCwyMS43NzQ5OTE3IDE4MC44ODgsMjMuNDM5IEMxODAuODg4LDI1LjEwMzAwODMgMTgwLjU0NjY3LDI2LjU0ODMyNzIgMTc5Ljg2NCwyNy43NzUgQzE3OS4xODEzMywyOS4wMDE2NzI4IDE3OC4yMTA2NzMsMjkuOTUwOTk2NiAxNzYuOTUyLDMwLjYyMyBDMTc1LjY5MzMyNywzMS4yOTUwMDM0IDE3NC4yMzIwMDgsMzEuNjMxIDE3Mi41NjgsMzEuNjMxIFogTTE3Mi41NjgsMjcuOTUxIEMxNzQuOTE0Njc4LDI3Ljk1MSAxNzYuMDg4LDI2LjQ0NzAxNSAxNzYuMDg4LDIzLjQzOSBDMTc2LjA4OCwyMS45MjQzMjU4IDE3NS43ODQwMDMsMjAuNzkzNjcwNCAxNzUuMTc2LDIwLjA0NyBDMTc0LjU2Nzk5NywxOS4zMDAzMjk2IDE3My42OTg2NzIsMTguOTI3IDE3Mi41NjgsMTguOTI3IEMxNzAuMjIxMzIyLDE4LjkyNyAxNjkuMDQ4LDIwLjQzMDk4NSAxNjkuMDQ4LDIzLjQzOSBDMTY5LjA0OCwyNi40NDcwMTUgMTcwLjIyMTMyMiwyNy45NTEgMTcyLjU2OCwyNy45NTEgWiBNMjAwLDMxLjM3NSBMMTk0LjA4LDMxLjM3NSBMMTg4LjA2NCwyNC4zNjcgTDE4OC4wNjQsMzEuMzc1IEwxODMuMjMyLDMxLjM3NSBMMTgzLjIzMiw4LjgxNSBMMTg4LjA2NCw4LjgxNSBMMTg4LjA2NCwyMi4zODMgTDE5My44NTYsMTUuNjk1IEwxOTkuNjE2LDE1LjY5NSBMMTkzLjAyNCwyMy4xODMgTDIwMCwzMS4zNzUgWiIvPjxnIGlkPSJzdG9yeWJvb2staWNvbi9kZWZhdWx0Ij48bWFzayBpZD0ibWFzay0yIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiLz48L21hc2s+PHVzZSBpZD0icGF0aDFfZmlsbC1wYXRoIiBmaWxsPSIjRkY0Nzg1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiLz48cGF0aCBpZD0icGF0aDJfZmlsbC1wYXRoIiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMy43MDc0MDgyLDQuOTE2NjM3MjEgTDIzLjg5OTIzMTUsMC4zMDMwMjM2NjEgTDI3Ljc1NTg5NjMsMCBMMjcuOTIyMDQ0NSw0Ljc1Nzg2MDA5IEMyNy45Mjc4MjY4LDQuOTIzNDQ0NTkgMjcuNzk4MjgxNiw1LjA2MjM2NDg1IDI3LjYzMjY5NzEsNS4wNjgxNDcxOSBDMjcuNTYxNzk1OSw1LjA3MDYyMzExIDI3LjQ5MjMxMTUsNS4wNDc4OTIxMiAyNy40MzY1ODIyLDUuMDAzOTkwNTYgTDI1Ljk0OTMyODMsMy44MzIzODUwMiBMMjQuMTg4NDU2MSw1LjE2ODExNCBDMjQuMDU2NDUyMiw1LjI2ODI0NzAyIDIzLjg2ODI2OCw1LjI0MjQxMDU2IDIzLjc2ODEzNSw1LjExMDQwNjYzIEMyMy43MjU5ODM5LDUuMDU0ODM5NTMgMjMuNzA0NTEwOCw0Ljk4NjMyMjM0IDIzLjcwNzQwODIsNC45MTY2MzcyMSBaIiBtYXNrPSJ1cmwoI21hc2stMikiLz48cGF0aCBpZD0icGF0aDlfZmlsbC1wYXRoIiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xOC43NzUxMDM2LDE1LjA3NjU0NzEgQzE4Ljc3NTEwMzYsMTUuODU4OTgwNyAyNC4wNDU0Njk4LDE1LjQ4Mzk4MDcgMjQuNzUyOTcwMSwxNC45MzQzNzUgQzI0Ljc1Mjk3MDEsOS42MDYxODg5NiAyMS44OTM5OTA0LDYuODA2MzExMDQgMTYuNjU4NzE2MSw2LjgwNjMxMTA0IEMxMS40MjM0NDE3LDYuODA2MzExMDQgOC40OTAyMDI4OCw5LjY0OTc1MTE5IDguNDkwMjAyODgsMTMuOTE0OTEzNiBDOC40OTAyMDI4OCwyMS4zNDM0MDQ5IDE4LjUxNTE5NjMsMjEuNDg1NTc3IDE4LjUxNTE5NjMsMjUuNTM3NDgxMyBDMTguNTE1MTk2MywyNi42NzQ4NTggMTcuOTU4MjUyMywyNy4zNTAxNzU0IDE2LjczMjk3NTMsMjcuMzUwMTc1NCBDMTUuMTM2NDAyMywyNy4zNTAxNzU0IDE0LjUwNTE5OSwyNi41MzQ3OTQ2IDE0LjU3OTQ1ODIsMjMuNzYyNDM5IEMxNC41Nzk0NTgyLDIzLjE2MTAxMjcgOC40OTAyMDI4OCwyMi45NzM1MTI3IDguMzA0NTU0ODUsMjMuNzYyNDM5IEM3LjgzMTgxOTM5LDMwLjQ4MDg0MzMgMTIuMDE3NTE1NCwzMi40MTg2ODkgMTYuODA3MjM0NSwzMi40MTg2ODkgQzIxLjQ0ODQzNTIsMzIuNDE4Njg5IDI1LjA4NzEzNjUsMjkuOTQ0ODE1OSAyNS4wODcxMzY1LDI1LjQ2NjM5NTMgQzI1LjA4NzEzNjUsMTcuNTA0NzU4NyAxNC45MTM2MjQ2LDE3LjcxODAxNjggMTQuOTEzNjI0NiwxMy43NzI3NDE2IEMxNC45MTM2MjQ2LDEyLjE3MzMwNTYgMTYuMTAxNzcyLDExLjk2MDA0NzUgMTYuODA3MjM0NSwxMS45NjAwNDc1IEMxNy41NDk4MjY2LDExLjk2MDA0NzUgMTguODg2NDkyNCwxMi4wOTA5MzM0IDE4Ljc3NTEwMzYsMTUuMDc2NTQ3MSBaIiBtYXNrPSJ1cmwoI21hc2stMikiLz48L2c+PC9nPjwvc3ZnPg== 'storybook logo')

## Installation & Quick Start

This app can be installed by using the command:

    npm install

To let docker take care of this in development mode:

    docker-compose -f docker-compose.dev.yml up

This will start the app on the chosen **port** value in development mode.
Alternatively to let npm start the dev app, you can also run:

    npm run start

To let docker take care of this in production mode:

    docker-compose -f docker-compose.yml up

This will distribute a production build to the **/dist** folder and run the node script on the specified **port**
Alternatively you can also run:

    npm run build && node ./dist/server/server.js

## Usage

There are npm scripts for all the relevant things. The server will always be started on port 8500 unless otherwise specified in `process.env.PORT`. You can use a `.env` file to specify env vars. If you want to use them in your client side code, don't forget to add them in [config/env.js](config/env.js#L37).

### Scripts:

#### `npm start`

Starts the app in development mode: creates a new client and server dev build using webpack, starts the Express server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.
Starts Storybook on port :8400

#### ` npm build`

Creates a new build, optimized for production.

#### `npm test`

Run all tests using jest.

#### `npm test:update`

Update all Jest snapshots (if there are any)

#### `npm run depgraph`

Render an SVG outlining project dependencies.
Please install [GraphViz](https://graphviz.org/download/)

#### `npm lint:js`

Run ESLint for all JavaScript and TypeScript files

#### `npm lint:css`

Run Stylelint for all CSS files

#### `npm lint`

Run lint:js and lint:css in parallel

#### `npm analyze`

Starts `webpack-bundle-analyzer` to give you the opportunity to analyze your bundle(s)

#### `npm plop`

Run plop to create new React components or Redux reducers via CLI

## Environment Variables

There are a few environment variables you can set to adjust the setup to your needs

| Variable         | Default            | Description                                                                                                                                                                                                                                                                                      |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `PORT`           | `8500`             | Port number your application will be served on.                                                                                                                                                                                                                                                  |
| `HOST`           | `http://localhost` | Host (including protocol!) your application will be served on. This is usually neglectable as most of the time your application will be served via remote proxy (e.g. Nginx) on localhost. **Note:** this is only for convenience. The server itself will not be bound exclusively to that host. |
| `DEVSERVER_HOST` | `http://localhost` | Optional. Different host for the Webpack Dev Server to be served on.                                                                                                                                                                                                                             |

## Tricks

### Component scaffolding using plop

Along with this starter kit comes `plop` - a great command line tool to keep the structure of your Redux components and Redux reducers consistent. Run `npm plop` to have components and Redux reducers created for you automatically! Just enter a name, answer a few questions and you're ready to go! You can of course adjust everything to your needs. All Plop templates can be found in the `config/plop` directory.

### Avoid source map generation for faster builds

In some cases you might not want to generate source maps for the generated files. In this case you can set the `OMIT_SOURCEMAP` environment variable to `true`. No source map files will be generated then. This works no matter if you're in devmode or building for production.

### Change the port of the dev environment

By default if you run `npm start` the development server will use port 8500. You can change this by specifying a `PORT` environment variable.

### Import SVGs as ReactComponent

You can import SVG files as React components exactly the way you can do it in Create React App 2.0:

```
import { ReactComponent as Logo } from './Logo.svg';
```

Then you can use it in JSX like `<div><Logo /></div>`.

### Use plain JavaScript instead of TypeScript

- remove the `@babel/typescript` preset from `babel.preview.js`
- uninstall TypeScript: `npm uninstall typescript @babel/preset-typescript`
- uninstall all dependencies beginning with `@types/`
- delete `tsconfig.json` and `src/global.d.ts`
- remove `wiremore/typescript` from the `extends` section in `.eslintrc.js`
- remove all types from all files if there still are any
- remove `tsConfig` option from `.dependency-cruiser.js`

### Gzip by default

Webpack builds assets (JS/CSS) to Gzip and the Express app serves these versions automatically.

## License

MIT.
