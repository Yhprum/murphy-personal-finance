export function PV(rate, periods, payment, future, type=0) {
  type = type ? 1 : 0
  if(rate === -1) {
    return null;
  }
  if (rate === 0) {
    return -payment * periods - future
  } else {
    return ((1 - Math.pow(1 + rate, periods)) * payment * (1 + rate * type) / rate - future) / Math.pow(1 + rate, periods)
  }
}

export function FV(rate, periods, payment, value) {
  if (rate === 0) {
    return -value - payment * periods;
  } else {
    const term = Math.pow(1 + rate, periods);
    return payment * (1 - term) / rate - value * term;
  }
}

export function PMT(rate, periods, present, future=0) {
  if (rate === 0) {
    return (-present - future) / periods;
  } else {
    const term = Math.pow(1 + rate, periods);
    return (future * rate + present * rate * term) / (1 - term);
  }
}

export function RATE(r, n, e, t=0, a=0, o=.01) {
  let f = o;
  a = a ? 1 : 0;
  for (let s = 0; s < 20; s++) {
    let l, c;
    if (Math.abs(f) < 1e-10 ? l = e * (1 + r * f) + n * (1 + f * a) * r + t : (c = Math.pow(1 + f, r),
      l = e * c + n * (1 / f + a) * (c - 1) + t),
    Math.abs(l) < 1e-10)
      return f;
    let m;
    if (Math.abs(f) < 1e-10)
      m = e * r + n * a * r;
    else {
      c = Math.pow(1 + f, r);
      let p = r * Math.pow(1 + f, r - 1);
      m = e * p + n * (1 / f + a) * p + n * (-1 / (f * f)) * (c - 1);
    }
    f -= l / m;
  }
  return f;
}

export const currency = num => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num);
export const percent = num => (num * 100).toFixed(2) + "%";