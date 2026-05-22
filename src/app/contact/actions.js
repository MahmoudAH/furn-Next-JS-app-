'use server';

export async function submitContact(formData) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const name = formData.get('name');
    const message = formData.get('message');

    if (!name || !message) {
        return { success: false, message: 'يرجى إدخال الاسم وتفاصيل الطلب بشكل صحيح.' };
    }

    // Here you can integrate with your preferred backend or email service
    // Example: Resend, SendGrid, or direct DB insert.

    return { success: true, message: 'تم استلام طلبك بنجاح. سنتواصل معك في غضون 60 دقيقة لتأكيد التفاصيل.' };
}
