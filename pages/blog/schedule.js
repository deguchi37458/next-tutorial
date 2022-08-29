export default function Schedule() {
  return <h1>記事のタイトル</h1>
}

export async function getStaticProps() {
  console.log('1')
  console.log('2')
  console.log('3')
  return {
    props: {},
  }
}