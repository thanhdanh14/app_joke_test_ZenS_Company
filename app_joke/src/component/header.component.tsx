export default function Header() {
  return (
    <>
      <div className='flex justify-around my-2  '>
        <h1 className='font-semibold text-3xl py-1'>Joke App</h1>
        <div className='flex flex-col'>
          <h2 className='text-gray-400'>Handicrafted by</h2>
          <h2>Jim HLS</h2>
        </div>
      </div>
    </>
  )
}
