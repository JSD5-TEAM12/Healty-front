import AxiosServices from "../../services/AxiosServices"

const api = import.meta.env.VITE_APP_BACKEND_URL

export const read = async (id) => {
  console.log("id n function:>> ", id)
  const response = await AxiosServices("GET", api + "/activities/" + id, {})
  console.log("response n function :>> ", response)
  return response
}

export const list = async (id) => {
  const response = await AxiosServices("GET", api + "/activity/" + id, {})
  return response;
}

export const create = async (data) => {
  console.log("data :>> ", data)

  const response = await AxiosServices("POST", api + "/activities", data)
  console.log("response :>> ", response)
}

export const del = async (id) => {
  const response = await AxiosServices("DELETE", api + "/activities/" + id)
  console.log("response :>>", response)
}

export const updated = async (id, data) => {
  if (data) {
    console.log("activity :", id, data)
    const dataUpdated = {
      title: data.updateTitle,
      desc: data.updateDesc,
      type: data.updateType,
      date: data.updateDate,
      duration: data.updateDuration,
    }
    console.log("Data Update :>>", dataUpdated)
    const response = await AxiosServices(
      "PUT",
      api + "/updateActivity/" + id,
      dataUpdated
    )
    console.log("response :>>", response)
    return response;
  }
}
