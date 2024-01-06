import '@styles/globals.css'

import Feed from '@components/Feed'

export const metadata ={
    title:"Promptopia",
    description: 'Discover and share AI prompts'
}


const RootLayout = ({children}) => {
  
  
    return (

    <html lang='en'>
     
        
    <body >
        <div className='main'>
        <div className='gradient' />
        </div>
    </body>

    <main className='app'>
        {children}
    </main>


    </html>
  )
}

export default RootLayout