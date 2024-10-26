import React from 'react'
import Text from '../Text'

export default function Note({ data }: { data: string }) {
    return (
        <div style={{ borderLeft: '3px solid black', paddingLeft: 14, marginTop: '1rem' }}><Text data={data}></Text></div>
    )
}
