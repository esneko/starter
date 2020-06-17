import * as React from 'react'
import { atom, useRecoilState, useRecoilValue, selector } from 'recoil'

const textState = atom({
  key: 'textState',
  default: ''
})

const countState = selector({
  key: 'countState',
  get: ({ get }) => {
    const text = get(textState)

    return text.length
  }
})

const TextInput = () => {
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  )
}

const CharCount = () => {
  const count = useRecoilValue(countState)

  return <>Charset Count: {count}</>
}

export const App = () => {
  React.useEffect(() => {
    console.log('Rerender')
  })

  return (
    <>
      <TextInput />
      <CharCount />
    </>
  )
}
