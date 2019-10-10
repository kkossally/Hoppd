export const fetchCheckins = () => {
  return $.ajax({
    method: "GET",
    url: "api/checkins",
  });
}

export const fetchCheckin = id => {
  return $.ajax({
    method: "GET",
    url: `api/checkins/${id}`,
  });
}

export const createCheckin = checkin => {
  return $.ajax({
    method: "POST",
    url: "api/checkins",
    data: { checkin },
  });
}

export const deleteCheckin = id => {
  return $.Checajax({
    method: "DELETE",
    url: `api/checkins/${id}`,
  });
}