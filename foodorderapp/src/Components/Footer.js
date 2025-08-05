import React from 'react'

function Footer() {
  return (
    <footer style={styles.footer}>
        <p style={styles.text}>🍔 Food Order App &copy; 2025. All rights reserved.</p>
        <p style={styles.text}> Made with ❤️ by Rachna</p>
    </footer>
  )
}

const styles = {
    footer : {
        marginTop : 'auto',
        backgroundColor : 'LightGreen' ,
        color : 'black',
        textAlign : 'center',
        padding: '1 rem', // ????
        position: 'relative',
        bottom: 0,
        widht: '100%'
    },

    text: {
    margin: '0.2rem',
    fontSize: '14px',
    }
}

export default Footer
