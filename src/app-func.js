import React from 'react'

export function AppFn ({items}){
  return <>
    { items.map((item, i) => {
        return <div key={i}>
          {item.name}
          {item.children && <AppFn items={item.children}/>}
        </div>
      })
    }
  </>
}
