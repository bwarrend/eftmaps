const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let zoomFactor = 0.94;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences:
        {
            nodeIntegration: true
        },
        backgroundColor: '#000000',
        title: "EFT Maps by bwarrend"
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
    mainWindow.maximize();
    mainWindow.on('closed', () => app.quit());

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});


const menuTemplate = [
    {
        label: 'File',
        submenu: 
        [
            // {
            //     label: 'Zoom In',
            //     accelerator: ']',
            //     click() {
            //         zoomFactor += 0.02;
            //         mainWindow.webContents.setZoomFactor(zoomFactor);
            //     }
            // },
            // {
            //     label: 'Zoom Out',
            //     accelerator: '[',
            //     click() {
            //         zoomFactor -= 0.02;
            //         mainWindow.webContents.setZoomFactor(zoomFactor);
            //     }
            // },
            {
                label: 'Close',
                accelerator: 'Alt+Q',
                click() {
                    app.quit();
                }
            }
        ]
    },
    {        
        label: 'Maps',
        submenu:
        [
            {
                label: 'Customs',
                accelerator: 'Ctrl+D',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/src/customs.html`);
                    mainWindow.title = 'EFT Maps by bwarrend - Customs';
                }
            },
            {
                label: 'Factory',
                accelerator: 'Ctrl+F',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/src/factory.html`);
                }
            },
            {
                label: 'Interchange',
                accelerator: 'Ctrl+I',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/src/interchange.html`);
                }
            },
            // {
            //     label: 'Labs',
            //     accelerator: 'Ctrl+L',
            //     click() {
            //         //load Labs
            //     }
            // },
            {
                label: 'Reserve',
                accelerator: 'Ctrl+R',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/src/reserve.html`);
                }
            },
            {
                label: 'Shoreline',
                accelerator: 'Ctrl+S',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/src/shoreline.html`);
                }
            },
            {
                label: 'Woods',
                accelerator: 'Ctrl+W',
                click() {
                    mainWindow.loadURL(`file://${__dirname}/src/woods.html`);
                }
            }
        ]
    },
    {
        label: 'Tools',
        submenu:
        [
            {
                label: 'Ammo Chart',
                accelerator: 'Alt+A',
                click() {
                    mainWindow.loadURL(`https://tarkov-tools.com/`);
                }
            },
            {
                label: 'Wiki',
                accelerator: 'Alt+W',
                click() {
                    mainWindow.loadURL(`https://escapefromtarkov.gamepedia.com/Escape_from_Tarkov_Wiki`);
                }
            }
        ]
    }
]