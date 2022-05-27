import React from 'react'
import Bar from '../components/bar'

const Card = ({total, policy, claim, policyValue, claimValue, policyColor, claimColor}) => {
    console.log(claimColor)
  return (
      <div className='mt-3'>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h3 className='text-5xl font-normal text-gray-600'>{total}<sup className='text-purple-700'>$</sup></h3>
              <p className='font-light text-xs mb-3'> Total value of Disbursement</p>
              <Bar scorePercentage={policy} headline="Policy" value={policyValue} color={policyColor} className="my-4"/>
              <Bar scorePercentage={claim} headline="Claim" value={claimValue} color={claimColor} />
          </div>
      </div>
  )
}

export default Card