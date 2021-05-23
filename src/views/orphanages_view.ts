import Orphanage from '../models/Orphanage';
import images_view from './images_view';

export default {
    render(orphanage: Orphanage) {
        return {
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            open_on_weekends: orphanage.open_on_weekends,
            about: orphanage.about,
            instrutions: orphanage.instrutions,
            opening_hours: orphanage.opening_hours,
            image: images_view.renderMany(orphanage.images)
        }
    },
    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
}