const newTripFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#trip-name').value.trim();
    const startDate = document.querySelector('#trip-startDate').value.trim();
    const endDate = document.querySelector('#trip-endDate').value.trim();

    if (name && startDate && endDate) {
        const response = await fetch('api/trips', {
            method: 'POST',
            body: JSON.stringify({ name, startDate, endDate }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to add Trip');
        }
    }
}

const delTripButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`api/trips/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete Trip');
        }
    }
}

document.querySelector('.new-trip-form').addEventListener('submit', newTripFormHandler);
document.querySelector('.trip-list').addEventListener('click', delTripButtonHandler);