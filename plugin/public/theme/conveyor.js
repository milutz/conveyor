// http://cssinjs.org/
// https://github.com/callemall/material-ui

import green from 'material-ui/colors/green';
// Some styles applied in the custom element are also available in the
// `override` functionality of material-ui but I think is best to have everything
// in a single place when possible
import global from './global';
import primary from './palette/primary';
import secondary from './palette/secondary';

export default {
    palette: {
        secondary: {
            ...secondary
        },
        primary: {
            ...primary
        },
        background: {
            appBar: '#ffffff'
        },
        text: {
            lightDivider: primary[50]
        }
    },
    typography: {
        fontFamily: '"Rubik", sans-serif',
        'display4': {
            'fontSize': 112,
            'fontWeight': 300,
            'letterSpacing': '-.04em',
            'lineHeight': 1,
            'color': 'rgba(0, 0, 0, 0.54)'
        },
        'display3': {
            'fontSize': 56,
            'fontWeight': 400,
            'letterSpacing': '-.02em',
            'lineHeight': 1.35,
            'color': 'rgba(0, 0, 0, 0.54)'
        },
        'display2': {
            'fontSize': 45,
            'fontWeight': 400,
            'lineHeight': '48px',
            'color': 'rgba(0, 0, 0, 0.54)'
        },
        'display1': {
            'fontSize': 34,
            'fontWeight': 400,
            'lineHeight': '40px',
            'color': 'rgba(0, 0, 0, 0.54)'
        },
        'headline': {
            'fontSize': 24,
            'fontWeight': 400,
            'lineHeight': '32px',
            'color': primary[500]
        },
        'title': {
            'fontSize': 18,
            'fontWeight': 500,
            'lineHeight': 1,
            'color': primary[500]
        },
        'subheading': {
            'fontSize': 16,
            'fontWeight': 400,
            'lineHeight': '24px',
            'color': primary[500]
        },
        'body2': {
            'fontSize': 15,
            'fontWeight': 400,
            'lineHeight': '24px',
            'color': primary[500]
        },
        'body1': {
            'fontSize': 15,
            'fontWeight': 300,
            'lineHeight': '20px',
            'color': primary[500],
            'opacity': '0.7'
        },
        'caption': {
            'fontSize': 12,
            'fontWeight': 500,
            'lineHeight': 1,
            'color': '#959595'
        },
        'button': {
            'fontSize': 16,
            'textTransform': 'none',
            'fontWeight': 400
        }

    },
    custom: { //conveyor specific stuff
        logo: {
            'height': '70px',
            'float': 'left'
        },
        layout: {
            main: {},
            section: {
                'background-color': '#ffffff',
                width: '90%',
                margin: '20px auto',
                'max-width': 'initial',
                border: global.border,
                'border-radius': global.borderRadius
            },
            progressBar: {
                'height': '5px',
            }
        },
        content: {
            header: {
                ...global.wrapper,
                '& .description': {
                    'width': '60%'
                }
            },
            subHeader: {
                ...global.wrapper
            },
            body: {
                ...global.wrapper
            },
            footer: {
                ...global.wrapper
            }
        },
        card: {
            root: {
                border: global.border,
                'border-radius': global.borderRadius,
                'box-shadow': 'none',
                display: 'grid',
                'transition': global.hoverTransition,
                '&:hover, &:hover div': {
                    'border-color': primary[500]
                },
                '&:hover .action, &:hover .action': {
                    'background-color': secondary[500],
                    'color': '#ffffff'
                },
                '&:hover .action p': {
                    'color': '#ffffff'

                },
                '& action': {}
            },
            gridItem: {
                display: 'grid'
            },
            content: {
                ...global.wrapper
            },
            header: {
                float: 'left',
            },
            badges: {
                root: {
                    float: 'right',
                    'padding-top': '7px',
                },
                img: {
                    width: '17px',
                    height: '17px',
                    'margin-left': '10px',
                }
            },
            body: {
                clear: 'both',
                'text-align': 'justify',
            },
            action: {
                root: {
                    'margin-top': 'auto',
                    'height': '45px',
                    'border-top': global.border,
                    'display': 'block',
                    'transition': global.hoverTransition,
                    '& p': {
                        'cursor': 'pointer'
                    },
                    '&.action:hover p': {
                        'color': primary[500]
                    }
                },
                text: {
                    'opacity': '1',
                    'line-height': '2.5',
                    'color': secondary[500],
                    'font-weight': 500
                }
            }
        },
        table: {
            root: {
                ...global.box,
                'overflow': 'auto',
                '& td, & th': {
                    'padding': '15px 10px',
                    'border-right': global.border
                }
            },
            columns: {
                description: {
                    'border-right': 'none !important'
                },
                options: {}
            }

        },
        appBar: {
            root: {
                'height': '70px'
            },
            tabs: {},
            tab: { //the style is applied to the button element inside the Tab component
                'height': '70px',
                '&:hover, &:focus, &:active:focus, &.active:focus, &.focus, &:active.focus, &.active.focus': {
                    color: secondary[500],
                    outline: 'none'

                }
            },
            indicator: {
                'background-color': secondary[500]
            }
        },
        form: {
            label: {},
            box: global.box,
            bool: {
                checked: {
                    color: secondary[500],
                    '& + $bar': {
                        backgroundColor: secondary[500]
                    }
                }
            },
            text: {
                root: {
                    'border': global.border,
                    'border-radius': global.borderRadius,
                    'padding': '5px 10px ',
                    'transition': global.hoverTransition,
                    '&:hover': {
                        'border-color': primary[500]
                    },
                    '& .input': {
                        'padding': '1px'
                    }
                },
                underline: { //reset of the original style
                    '&::before': {
                        'background-color': 'rgba(0, 0, 0, 0)'
                    },
                    '&:hover:not(.input-disabled):before': {
                        'background-color': 'rgba(0, 0, 0, 0)'
                    },
                    '&:hover:not(.input-disabled):after': {
                        'background-color': 'rgba(0, 0, 0, 0)'
                    }
                },
                inkbar: {//reset of the original style
                    '&::after': {
                        'background-color': 'rgba(0, 0, 0, 0)'
                    }
                },
                focused: {
                    'border-color': `${secondary[500]} !important`
                },
                error: {
                    'border-color': `${primary['A100']} !important`
                }
            },
            list: {
                root: {
                    '&.is-focused .Select-control': {
                        'border-color': `${secondary[500]} !important`
                    },
                    '& .Select-control': {
                        'transition': global.hoverTransition
                    },
                    '& .Select-control:hover': {
                        'border-color': primary[500]
                    }
                },

                error: {
                    '& .Select-control': {
                        'border-color': `${primary['A100']} !important`
                    }
                }
            },
            button: {
                primary: {
                    'padding': '10px 30px',
                    'border': `3px solid ${secondary[500]}`,
                    'background-color': secondary[500],
                    '&:hover': {
                        'background-color': secondary[500]
                    },
                    '& .button-label': {
                        'color': '#fff'
                    }
                },
                secondary: {
                    'padding': '10px 30px',
                    'background-color': 'none',
                    'border': '3px solid #959595',
                    '&:hover': {
                        'background-color': 'none'
                    },
                    '& .button-label': {
                        'color': '#959595'
                    }
                },
                upload: {
                    'background-color': secondary[500],
                    'width': '36px',
                    'height': '36px',
                    '& .button-label': {
                        'color': '#FFF'
                    }

                }
            },
            file: {
                root: {
                    'display': 'none'
                },
                label: {
                    'font-weight': '400'
                }
            },
            group: {},
            subGroup: {
                ...global.box,
                'padding-top': '10px'
            },
            helper: {
                root: {
                    'border-top': `3px solid ${secondary[500]}`
                },
                title: {
                    color: secondary[500],
                    'margin-top': '20px'
                },
                icon: {
                    'width': '16px',
                    'height': '16px',
                    'margin': '4px 0 0 4px',
                    'vertical-align': 'top',
                    'color': '#959595',
                    'cursor': 'pointer',
                    'float': 'right'
                }

            }
        },
        dialog: {
            status: {
                avatar: {
                    'background-color': secondary['A100'],
                    'color': secondary[500]
                },
                avatarSuccess: {
                    width: '56px',
                    height: '56px',
                    'background-color': `${green[500]} !important`,
                    '&:hover': {
                        'background-color': green[500],
                    },
                    '& svg': {
                        'color': secondary['A100']
                    }
                },
                progress: {
                    root: {
                        position: 'relative',
                        width: '56px',
                        height: '56px'
                    },
                    children: {
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    circle: {
                        position: 'absolute',
                        '& .CircularProgressbar-path': {
                            'stroke': secondary['500']
                        },
                        '& .CircularProgressbar-trail': {
                            'stroke': secondary['A400']
                        },
                    }
                }
            }
        }
    },
    overrides: {
        'MuiGrid': {
            'spacing-xs-16': {
                'margin': '0 -8px'
            }
        },
        'MuiLinearProgress': {
            root: {
                'background-color': 'white !important',

            },
            bar: {
                'background-color': secondary[500],
            }
        },
        'MuiTooltip': {
            root: {},
            tooltipOpen: {
                'font-size': '15px'
            },
        },
    }
};
