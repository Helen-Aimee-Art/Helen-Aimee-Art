import React from 'react'
import { useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        width: '100%'
    },
    form: {
        width: '100%',
        height: '1300px'
    }
}))

export const CommissionForm = (props) => {
    const { isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        setCurrentPage('commissionform')
    }, [setCurrentPage])

    return (
        <>
            <div className={classes.container}>
                <iframe
                    className={classes.form}
                    title="Commission Form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeEC5AAjix4OOfgcXzL_zvijeN9YE1fFq58UaJrWlHYwQdxpA/viewform?embedded=true"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">
                    Loading…
                </iframe>
            </div>
        </>
        
    )
}
