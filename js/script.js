document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.getElementById('bmiform');
    const resultDiv = document.getElementById('result');
    const bmiValueElement = document.getElementById('bmivalue');
    const bmiCategoryElement = document.getElementById('bmicategory');
    const calculationElement = document.getElementById('calculation');

    bmiForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // amnil nilai input
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const heightInMeters = height / 100;

        // hitung bmi
        const bmi = weight / (heightInMeters * heightInMeters);

        // kategori bmi
        let category;
        if (bmi < 18.5) {
            category = 'Kekurangan berat badan';
        } else if (bmi < 25) {
            category = 'Normal (ideal)';
        } else if (bmi < 30) {
            category = 'Kelebihan berat badan';
        } else {
            category = 'kegemukan (Obesitas)';
        }

        // tampilin hasil
        bmiValueElement.textContent = bmi.toFixed(1);
        bmiCategoryElement.textContent = `Kategori: ${category}`;
        calculationElement.textContent = `= ${weight} / (${heightInMeters} × ${heightInMeters})
= ${weight} / ${(heightInMeters * heightInMeters).toFixed(2)}
= ${bmi.toFixed(1)}`;

        resultDiv.classList.remove('hidden');
    });

    bmiForm.addEventListener('reset', function() {
        resultDiv.classList.add('hidden');
    });
});