import React from 'react'
import Image from 'next/image'

import mastercard from 'src/assets/images/mastercard.png'
import mcd from 'src/assets/images/mcd.png'
import netflix from 'src/assets/images/netflix.png'
import pepsi from 'src/assets/images/pepsi.png'
import pingan from 'src/assets/images/pingan.png'
import Siemens from 'src/assets/images/Siemens.png'
import tata from 'src/assets/images/tata.png'
import vodafone from 'src/assets/images/vodafone.png'

export default function Partners() {
  return (
    <div className='flex justify-center bg-[#737373] backdrop-blur-3xl bg-opacity-[0.20] flex-wrap px-20 py-5 gap-x-20 items-center gap-y-5'>
        <div>
            <Image src={netflix} className="w-[80px]"></Image>
        </div>
        <div>
            <Image src={mcd} className="w-[150px]"></Image>
        </div>
        <div>
            <Image src={pingan} className="w-[110px]"></Image>
        </div>
        <div>
            <Image src={vodafone} className="w-[150px]"></Image>
        </div>
        <div>
            <Image src={Siemens} className="w-[110px]"></Image>
        </div>
        <div>
            <Image src={tata} className="w-[110px]"></Image>
        </div>
        <div>
            <Image src={mastercard} className="w-[80px]"></Image>
        </div>
        <div>
            <Image src={pepsi} className="w-[110px]"></Image>
        </div>
    </div>
  )
}
