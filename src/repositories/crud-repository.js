class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async findAll() {
        const totalCount = await this.model.countDocuments();
        const data = await this.model.find();
        return { data, totalCount };
    }

    async findById(id) {
        return await this.model.findById(id);
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return awaitthis.model.findByIdAndDelete(id);
    }
}

module.exports = CrudRepository;
