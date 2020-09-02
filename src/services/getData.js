import axios from 'axios'

const getData = async (path, setState) => {
  try {
    const res = await axios.get(path)
    setState(...res.data)
  } catch (err) {
    console.log(err)
  }
}

export default getData
