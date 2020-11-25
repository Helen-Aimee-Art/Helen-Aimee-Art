import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center'
    },
    li: {
        fontSize: 20,
        padding: 3,
    },
    link: {
        textDecoration: 'none',
        color: theme.colorSecondary,
        backgroundColor: theme.colorPrimary,
        borderBottom: '2px solid rgba(0,0,0,0)',
        marginRight: 20,
        '&:hover': {
            color: theme.colorTertiary
        }
    },
    activeLink: {
        textDecoration: 'none',
        color: theme.colorSecondary,
        backgroundColor: theme.colorPrimary,
        borderBottom: '2px solid',
        borderBottomColor: theme.colorTertiary,
        marginRight: 20,
        '&:hover': {
            color: theme.colorTertiary
        }
    }
}))

export const NavLinks = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <ul className={classes.ul}>
            <Link to='/' className={props.currentPage === 'gallery' ? classes.activeLink : classes.link}>
                <li className={classes.li}>
                    Gallery
                </li>
            </Link>
            <Link to='/commissioninfo' className={props.currentPage === 'commissioninfo' ? classes.activeLink : classes.link}>
                <li className={classes.li}>
                    Comission Info
                </li>
            </Link>
            <Link to='/about' className={props.currentPage === 'about' ? classes.activeLink : classes.link}>
                <li className={classes.li}>
                    About
                </li>
            </Link>
        </ul>
    )
}
