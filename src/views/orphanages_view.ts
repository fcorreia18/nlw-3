import Orphanage from '../models/Orphanage';

export default {
    render(orphanage: Orphanage) {
        return {
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            open_on_weekends: orphanage.open_on_weekends,
            about: orphanage.about,
            instrutions: orphanage.instrutions,
            opening_hours: orphanage.opening_hours
        }
    },
    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
}