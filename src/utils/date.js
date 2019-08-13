import moment from 'moment'

export function YYYYMMDD(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
}
