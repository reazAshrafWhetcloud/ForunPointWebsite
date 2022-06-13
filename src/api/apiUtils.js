const base = "https://api.forunpoint.com";

export const contactUs = (formData) => {
  return fetch(`${base}/contact-us`, {
    cache: "default",
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formdata: formData }),
  });
};
