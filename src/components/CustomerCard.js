import React from 'react'
import Card from './Card'
import Button from './Button'

const CustomerCard = ({ customer }) => (
  <Card className='mb-8'>
    <p className='text-xl font-semibold'>{customer.title}</p>
    <p className='mt-6'>{customer.content}</p>
    <div className='align-center mt-8 text-center'>
      <a href={customer.link} target='_blank' rel='noopener noreferrer'>
        <Button size='xl'>{customer.cta}</Button>
      </a>
    </div>
  </Card>
)

export default CustomerCard
