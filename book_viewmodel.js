var bookViewModel = new ViewModel({
    model: book,
    title: function() {
        return book.get('title')
    },
    page: function() {
        return book.get('page')
    },
    read: function() {
        return book.get('read')
    },
    readPlus: function() {
        book.readPlus()
    },
    editTitle: function(value) {
        book.set('title',value)
    }
})
