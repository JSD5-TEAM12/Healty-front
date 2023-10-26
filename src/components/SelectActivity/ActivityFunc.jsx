import AxiosServices from "../../services/AxiosServices"

const api = import.meta.env.VITE_APP_BACKEND_URL

export const read = async (id) => {
  const response = await AxiosServices("GET", api + "/activities/" + id, {})
  return response
}

export const list = async (id) => {
  const response = await AxiosServices("GET", api + "/activity/" + id, {})
  return response;
}

export const create = async (data) => {

  const response = await AxiosServices("POST", api + "/activities", data)
}

export const del = async (id) => {
  const response = await AxiosServices("DELETE", api + "/activities/" + id)
}

export const updated = async (id, data) => {
  if (data) {
    const dataUpdated = {
      title: data.updateTitle,
      desc: data.updateDesc,
      type: data.updateType,
      date: data.updateDate,
      duration: data.updateDuration,
    }
    const response = await AxiosServices(
      "PUT",
      api + "/updateActivity/" + id,
      dataUpdated
    )
    return response;
  }
}
