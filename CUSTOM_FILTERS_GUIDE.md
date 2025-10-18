# Custom HTML Filters for Directual Web Components

## Introduction

Custom HTML Filters are a powerful feature that allows developers to create completely customized filtering interfaces for Directual Web Components (Tables, Cards, etc.). Instead of being limited to the built-in filter components, you can write your own HTML, CSS, and JavaScript to create any filtering experience you need.

### What are HTML Filters?

HTML Filters are custom user interfaces that replace the standard Directual filtering system. They consist of:

- **Custom HTML**: Your own form elements, layouts, and styling
- **Interactive JavaScript**: Logic to handle user interactions and generate filters
- **DQL Integration**: Seamless connection to Directual's query language
- **Real-time Updates**: Instant filtering as users interact with your interface

### Key Benefits

✅ **Complete Design Freedom**: Create filters that match your exact design requirements  
✅ **Advanced Interactions**: Build complex filtering logic with multiple conditions  
✅ **Custom Components**: Use any UI library or custom components you prefer  
✅ **Business Logic**: Implement domain-specific filtering rules and validations  
✅ **User Experience**: Design intuitive interfaces tailored to your users' needs  

### How It Works

1. **Enable Custom Filters**: Set `customHTMLfilters: true` in your component props
2. **Provide HTML Content**: Pass your custom HTML/CSS/JS in `customHTMLfiltersContent`
3. **Use the API**: Access `window.DirectualFilter` to interact with the filtering system
4. **Generate DQL**: Create Directual Query Language strings to filter data
5. **Apply Filters**: Call `window.DirectualFilter.emit(dql)` to update the view

### Use Cases

- **E-commerce**: Product search with price ranges, categories, ratings, and availability
- **Real Estate**: Property filters with location maps, price ranges, and feature checkboxes  
- **CRM**: Contact filtering with tags, date ranges, and custom field combinations
- **Analytics**: Data filtering with date pickers, metric selectors, and comparison tools
- **Content Management**: Article filtering with categories, authors, and publication dates

---

## AI Prompt for Custom Filter Development

You are an expert web developer creating custom HTML filters for Directual Web Components. Your task is to create interactive filter interfaces that integrate with the Directual filtering system.

**CRITICAL: Date Formatting Requirements**
- All dates in DQL queries MUST be in ISO 8601 format
- Use formats like: `'2000-04-09T'`, `'2000-04-09T14:30:00Z'`, or `'2000-04-09T14:30:00.000Z'`
- Convert user input dates to ISO format before generating DQL
- Example: User selects "April 9, 2000" → convert to `'2000-04-09T'` in DQL

### Technical Requirements

**API Contract:**
- Use `window.DirectualFilter.props` to access current state and available fields
- Call `window.DirectualFilter.emit(dqlString, sortOptions)` to apply filters and sorting
- DQL (Directual Query Language) format: `'fieldName' operator 'value'`
- Sort options: `{field: 'fieldName', direction: 'asc'|'desc'}` or `'fieldName:asc'`

**Available Data:**
```javascript
window.DirectualFilter.props = {
    currentFilter: string,    // Current DQL filter
    currentSort: object|string|null, // Current sorting (object: {field, direction} or string: "field:direction")
    fields: Array<{          // Available fields for filtering
        key: string,         // Field system name
        value: string        // Field display name
    }>,
    lang: string,           // Current language
    dict: object           // Localization dictionary
}
```

**DQL Operators:**
- `like` - partial text match
- `=` - exact match  
- `>=`, `<=`, `>`, `<` - numeric/date comparisons
- `AND`, `OR` - logical operators

**DQL Examples:**
- `'title' like 'sun' AND 'year' < 1950`
- `('title' like 'sun' AND 'year' < 1950) OR 'is_good' = 'true'`
- `'birth_date' <= '2000-04-09T'`
- `'price' >= 100 AND 'category' = 'electronics'`

**Important Notes:**
- **Dates must be in ISO format**: Use ISO 8601 format like `'2000-04-09T'` or `'2000-04-09T14:30:00Z'`
- **Numbers are NOT quoted**: Use bare numbers like `100`, `1950` (no quotes)
- **Strings and dates ARE quoted**: Text and dates must be in single quotes `'text'`, `'2000-04-09T'`
- **Field names must be quoted**: Always use single quotes around field names `'fieldName'`

### Filter Design Guidelines

**[DESCRIBE YOUR FILTER REQUIREMENTS HERE]**
*Example: Create a modern, responsive filter interface with search inputs, dropdown selectors, and date pickers. Use Bootstrap-style components with blue (#007bff) primary color and clean typography.*

### Implementation Pattern

1. **HTML Structure**: Create form elements with unique IDs
2. **JavaScript Functions**: Implement filter logic and DQL generation
3. **Event Handlers**: Connect UI interactions to `window.DirectualFilter.emit()`
4. **State Management**: Handle filter clearing and validation

### Example Code Template

```html
<div style="padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h4>Custom Filters</h4>
    
    <!-- Text Search -->
    <div style="margin-bottom: 15px;">
        <label>Search Text:</label>
        <input type="text" id="textSearch" placeholder="Enter search term...">
        <button onclick="applyTextFilter()">Apply</button>
    </div>
    
    <!-- Numeric Range -->
    <div style="margin-bottom: 15px;">
        <label>Number Range:</label>
        <input type="number" id="minNumber" placeholder="Min">
        <input type="number" id="maxNumber" placeholder="Max">
        <button onclick="applyNumberFilter()">Filter</button>
    </div>
    
    <!-- Sorting -->
    <div style="margin-bottom: 15px;">
        <label>Sort by:</label>
        <select id="sortField">
            <option value="">No sorting</option>
            <option value="fieldName">Field Name</option>
            <option value="numberField">Number Field</option>
        </select>
        <select id="sortDirection">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
        <button onclick="applySorting()">Sort</button>
    </div>
    
    <!-- Actions -->
    <button onclick="clearFilters()">Clear All</button>
</div>

<script>
function applyTextFilter() {
    const value = document.getElementById('textSearch').value;
    if (value) {
        const dql = "'fieldName' like '" + value + "'";
        const currentSort = getCurrentSort();
        window.DirectualFilter.emit(dql, currentSort);
    }
}

function applyNumberFilter() {
    const min = document.getElementById('minNumber').value;
    const max = document.getElementById('maxNumber').value;
    
    let conditions = [];
    if (min) conditions.push("'numberField' >= '" + min + "'");
    if (max) conditions.push("'numberField' <= '" + max + "'");
    
    const dql = conditions.join(' AND ');
    const currentSort = getCurrentSort();
    window.DirectualFilter.emit(dql, currentSort);
}

function applySorting() {
    const field = document.getElementById('sortField').value;
    const direction = document.getElementById('sortDirection').value;
    
    if (field) {
        const sortOptions = { field: field, direction: direction };
        const currentFilter = getCurrentFilter();
        window.DirectualFilter.emit(currentFilter, sortOptions);
    }
}

function getCurrentSort() {
    const field = document.getElementById('sortField').value;
    const direction = document.getElementById('sortDirection').value;
    return field ? { field: field, direction: direction } : null;
}

function getCurrentFilter() {
    const text = document.getElementById('textSearch').value;
    const min = document.getElementById('minNumber').value;
    const max = document.getElementById('maxNumber').value;
    
    let conditions = [];
    if (text) conditions.push("'fieldName' like '" + text + "'");
    if (min) conditions.push("'numberField' >= '" + min + "'");
    if (max) conditions.push("'numberField' <= '" + max + "'");
    
    return conditions.join(' AND ');
}

function clearFilters() {
    document.getElementById('textSearch').value = '';
    document.getElementById('minNumber').value = '';
    document.getElementById('maxNumber').value = '';
    document.getElementById('sortField').value = '';
    window.DirectualFilter.emit('', null);
}

// Initialize on load
setTimeout(() => {
    console.log('Available fields:', window.DirectualFilter.props.fields);
}, 100);
</script>
```

### Best Practices

1. **Field Validation**: Check if fields exist before filtering
2. **Error Handling**: Validate user input and DQL syntax
3. **Performance**: Debounce rapid filter changes
4. **UX**: Provide clear feedback and loading states
5. **Accessibility**: Use proper labels and keyboard navigation

### Advanced Features

- **Multi-field filtering**: Combine multiple conditions with AND/OR
- **Dynamic field selection**: Let users choose which fields to filter
- **Preset filters**: Provide common filter combinations
- **Filter history**: Save and restore previous filter states

---

## Simple Example: Product Search Filter

```html
<div class="custom-filter" style="padding: 20px; background: #f8f9fa; border-radius: 8px; font-family: Arial, sans-serif;">
    <h3 style="margin-top: 0; color: #333;">🔍 Product Search</h3>
    
    <!-- Product Name Search -->
    <div style="margin-bottom: 15px;">
        <label style="display: block; font-weight: bold; margin-bottom: 5px;">Product Name:</label>
        <input type="text" id="productName" 
               style="width: 250px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"
               placeholder="Enter product name...">
    </div>
    
    <!-- Price Range -->
    <div style="margin-bottom: 15px;">
        <label style="display: block; font-weight: bold; margin-bottom: 5px;">Price Range:</label>
        <input type="number" id="minPrice" placeholder="Min $" 
               style="width: 100px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;">
        <input type="number" id="maxPrice" placeholder="Max $"
               style="width: 100px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    
    <!-- Category Dropdown -->
    <div style="margin-bottom: 15px;">
        <label style="display: block; font-weight: bold; margin-bottom: 5px;">Category:</label>
        <select id="category" style="width: 200px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
        </select>
    </div>
    
    <!-- Sorting Options -->
    <div style="margin-bottom: 15px;">
        <label style="display: block; font-weight: bold; margin-bottom: 5px;">Sort by:</label>
        <select id="sortBy" style="width: 150px; padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;">
            <option value="">Default</option>
            <option value="productName">Name</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
        </select>
        <select id="sortOrder" style="width: 120px; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            <option value="asc">A → Z / Low → High</option>
            <option value="desc">Z → A / High → Low</option>
        </select>
    </div>
    
    <!-- Action Buttons -->
    <div>
        <button onclick="searchProducts()" 
                style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">
            Search Products
        </button>
        <button onclick="clearSearch()"
                style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Clear
        </button>
    </div>
    
    <!-- Status Display -->
    <div id="filterStatus" style="margin-top: 15px; padding: 10px; background: #e9ecef; border-radius: 4px; display: none;">
        <strong>Active Filter:</strong> <span id="currentFilter"></span>
    </div>
</div>

<script>
function searchProducts() {
    const name = document.getElementById('productName').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    const category = document.getElementById('category').value;
    
    let conditions = [];
    
    // Add name filter
    if (name) {
        conditions.push("'productName' like '" + name + "'");
    }
    
    // Add price range filters
    if (minPrice) {
        conditions.push("'price' >= '" + minPrice + "'");
    }
    if (maxPrice) {
        conditions.push("'price' <= '" + maxPrice + "'");
    }
    
    // Add category filter
    if (category) {
        conditions.push("'category' = '" + category + "'");
    }
    
    // Combine all conditions
    const dql = conditions.join(' AND ');
    
    // Get current sorting
    const sortBy = document.getElementById('sortBy').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const sortOptions = sortBy ? { field: sortBy, direction: sortOrder } : null;
    
    // Show current filter
    updateFilterStatus(dql, sortOptions);
    
    // Apply filter with sorting
    window.DirectualFilter.emit(dql, sortOptions);
    
    console.log('Applied filter:', dql, 'with sorting:', sortOptions);
}

function clearSearch() {
    // Clear all inputs
    document.getElementById('productName').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('category').value = '';
    document.getElementById('sortBy').value = '';
    
    // Hide status
    document.getElementById('filterStatus').style.display = 'none';
    
    // Clear filter and sorting
    window.DirectualFilter.emit('', null);
    
    console.log('Filters and sorting cleared');
}

function updateFilterStatus(dql, sortOptions) {
    const status = document.getElementById('filterStatus');
    const current = document.getElementById('currentFilter');
    
    if (dql || sortOptions) {
        let statusText = '';
        if (dql) statusText += 'Filter: ' + dql;
        if (sortOptions) {
            if (statusText) statusText += ' | ';
            statusText += 'Sort: ' + sortOptions.field + ' ' + sortOptions.direction;
        }
        current.textContent = statusText;
        status.style.display = 'block';
    } else {
        status.style.display = 'none';
    }
}

// Auto-search on Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// Initialize when API is ready
setTimeout(() => {
    if (window.DirectualFilter) {
        console.log('🚀 Custom filter ready!');
        console.log('Available fields:', window.DirectualFilter.props.fields);
        
        // Show current filter if any
        const current = window.DirectualFilter.props.currentFilter;
        if (current) {
            updateFilterStatus(current);
        }
    }
}, 100);
</script>
```

This example creates a comprehensive product search interface with:
- Text search for product names
- Numeric range filtering for prices  
- Dropdown category selection
- **Sorting by multiple fields with direction control**
- Combined filter logic with AND operators
- Clear visual feedback with filter/sort status
- Keyboard shortcuts (Enter to search)

The filter generates DQL like: `'productName' like 'laptop' AND 'price' >= '100' AND 'price' <= '500' AND 'category' = 'electronics'`

With sorting like: `{field: 'price', direction: 'desc'}` for highest price first.

### API Usage Examples:

```javascript
// Filter only
window.DirectualFilter.emit("'name' like 'search'");

// Filter with sorting
window.DirectualFilter.emit("'name' like 'search'", {field: 'price', direction: 'asc'});

// Sorting only (keep current filter)
window.DirectualFilter.emit(window.DirectualFilter.props.currentFilter, {field: 'name', direction: 'desc'});

// Clear everything
window.DirectualFilter.emit('', null);
```
