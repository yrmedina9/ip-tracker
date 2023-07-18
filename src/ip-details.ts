export interface IpDetails {
    ip: string,
    company: {
        name: string,
        domain: string
    }
    location: {
        continent: {
            name: string
        }, 
        country: {
            name: string
        }, 
        region: {
            name: string
        }
        city: string,
        postal: string,
        latitude: number,
        longitude: number
    },
    time_zone : {
        name: string,
        abbreviation: string
        offset: number
    }
}