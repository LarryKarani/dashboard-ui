import React from 'react'
import { Transition } from '@headlessui/react'

const Color = {
    PURPLE: 'purple',
    GREEN: 'green'
}


const COLOR_MAPS = {
    
  [Color.PURPLE]: {
    headline: 'text-gray-500',
    score: 'text-purple-800',
    barContainer:
      ' bg-gray-300  hover:bg-opacity-50 hover:bg-purple-800',
        barScore: 'bg-purple-700',
  },
  [Color.GREEN]: {
    headline: 'text-gray-500',
    score: 'text-gray-500',
    barContainer:
      'bg-gray-300  hover:bg-opacity-50 hover:bg-green-800',
      barScore: 'bg-green-400 border-green-600',
  },
};




const Bar = ({
    scorePercentage = 0,
    value,
    headline,
    hasAnimation = true,
    className,
    color
}) => {
    return (
        <div className={className}>
            <div className="flex justify-between my-2 bg-op">
                <p className={`headline m-0 ${COLOR_MAPS[color]?.headline}`}>{headline}</p>
                <p className={`scoreLabel m-0 ${COLOR_MAPS[color]?.headline}`}>
                    {value} <sup>$</sup>
                </p>
            </div>
            <Transition
                as={'div'}
                appear={true}
                show={true}
                enter={`${hasAnimation ? 'transition-all delay-500 duration-1000' : null}`}
                enterFrom={`${hasAnimation ? 'opacity-0 w-0 h-full' : 'opacity-100 w-full h-full'}`}
                enterTo="opacity-100 w-full h-full"
                leave="transition-all duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                entered="h-full w-full"
            >
                <div
                    className={
                        `StyledBarContainer group relative w-full transition border-1 border-solid rounded h-2 ${COLOR_MAPS[color]?.barContainer}`}
                >
                    <div
                        className={`StyledBar h-full rounded  ${COLOR_MAPS[color]?.barScore}`}
                        style={{ width: `${scorePercentage}%`, animationFillMode: 'forwards' }}
                    />
                </div>
            </Transition>
        </div>
    )
}

export default Bar