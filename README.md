# Menu Bar Implementation

A responsive menubar implementation with proper keyboard navigation support with n level sub-menu items handling.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to do:

- Copy or clone this repository
- Install live server extension in Visual Studio Code / Use any live server if using different IDE.
- Open the html file with live server.

The project will be available at `http://localhost:{port_by_liveserver}` in your web browser.

## Built With

- HTML5
- CSS3
- JavaScript

## Authors

- Abhishek Kumar - [GitHub](https://github.com/abshakekumar)

## Task List

- [x] Create Menu Items with different items
  - [x] support different sub menu items
  - [x] add functionality for nested items as well
- [x] Focus Management using keyboard navigation
  - [ ] check for hover if we can do using css
- [x] State Management
  - [x] Use menu items from a config
  - [x] Normalise data while storing to make access and update easy for state update.
- [x] Responsive Menu Items
- [x] Accessibility via using aria attributes and semantic html elements
- [x] Use css variables to keep maintain config
- [ ] Close already opened menu item if clicked on different menu item.
- [ ] Handle esc key on any element if that has not any submenu, still it should close the current opened submenu.
