"use client";

import { Container, Title } from "@/shared/components/shared";
import { CheckoutItemDetails } from "@/shared/components/shared/checkout-item-details";
import { WhiteBlock } from "@/shared/components/shared/white-block";
import { Button, Input } from "@/shared/components/ui";
import { Textarea } from "@/shared/components/ui/textarea";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

export default function CheckoutPage() {
  // const [submitting, setSubmitting] = React.useState(false);
  // const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();
  // const { data: session } = useSession();

  // const form = useForm<CheckoutFormValues>({
  //   resolver: zodResolver(checkoutFormSchema),
  //   defaultValues: {
  //     email: '',
  //     firstName: '',
  //     lastName: '',
  //     phone: '',
  //     address: '',
  //     comment: '',
  //   },
  // });

  // React.useEffect(() => {
  //   async function fetchUserInfo() {
  //     const data = await Api.auth.getMe();
  //     const [firstName, lastName] = data.fullName.split(' ');

  //     form.setValue('firstName', firstName);
  //     form.setValue('lastName', lastName);
  //     form.setValue('email', data.email);
  //   }

  //   if (session) {
  //     fetchUserInfo();
  //   }
  // }, [session]);

  // const onSubmit = async (data: CheckoutFormValues) => {
  //   try {
  //     setSubmitting(true);

  //     const url = await createOrder(data);

  //     toast.error('Заказ успешно оформлен! 📝 Переход на оплату... ', {
  //       icon: '✅',
  //     });

  //     if (url) {
  //       location.href = url;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setSubmitting(false);
  //     toast.error('Не удалось создать заказ', {
  //       icon: '❌',
  //     });
  //   }
  // };

  // const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
  //   const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
  //   updateItemQuantity(id, newQuantity);
  // };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">Frontend</WhiteBlock>

          <WhiteBlock title="2. personal data">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. address delivery">
            <div className="flex flex-col gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Адрес"
              />
              <Textarea className="text-base" placeholder="Comment" rows={5} />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">3040 ₽</span>
            </div>
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-400" />
                  Стоимость товров:
                </div>
              }
              value="3000 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-400" />
                  Налоги:
                </div>
              }
              value="300 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-400" />
                  Доставка:
                </div>
              }
              value="120 ₽"
            />

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
