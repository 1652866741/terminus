import { Tab } from 'models/tab'

export class BaseTabComponent<T extends Tab> {
    protected model: T

    initModel (model: T) {
        this.model = model
        this.initTab()
    }

    initTab () { }
}