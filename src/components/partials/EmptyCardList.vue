<template>
  <div :class="classes['card-title-container']"><h1>ชำระค่าบริการ</h1></div>
  <div class="flex-conter" :class="classes['card-content-container']">
    <div :class="classes['card-icon-container']">
      <img src="/empty-credit-card.png" alt="empty credit card" />
    </div>
    <div :class="classes['card-text-container']">
      <div :class="classes['card-primary-text-container']">
        ยังไม่มีข้อมูลบัตรเครดิต/เดบิต
      </div>
      <div :class="classes['card-description-container']">
        <div>เพิ่มข้อมูลบัตรไว้เลย เพื่อความสะดวกในการจองบริการง่ายขึ้น</div>
        <div>รองรับบัตรประเภท: Visa, Master Card,</div>
        <div>JCB และ Union Pay</div>
      </div>
    </div>
    <div :class="classes['card-provider-icons-container']"></div>
    <div class="flex-conter" :class="classes['add-new-card-button-container']">
      <button>+ เพิ่มข้อมูลบัตรเครดิต/เดบิต</button>
    </div>
  </div>
</template>

<style scoped lang="scss" module="classes">
.card-title-container {
  color: #014672;
  font-size: 95%;
}

.card-content-container {
  border: 1px solid #eeeeee;
  height: 380px;
  flex-direction: column;

  .card-icon-container {
    margin-top: 1rem;
    > img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
  }

  .card-text-container {
    text-align: center;
    .card-primary-text-container {
      color: #014672;
      font-weight: 600;
    }

    .card-description-container {
      margin-top: 0.8rem;
      font-size: 75%;
      > div {
        display: block;
      }
    }
  }

  .card-provider-icons-container {
    display: block;
  }

  .add-new-card-button-container {
    text-align: center;
    > button {
      background-color: #014672;
      border-width: 0px;
      border-radius: 8px;
      width: 180px;
      height: 35px;
      color: white;
      font-size: 70%;
      font-weight: 600;
    }
  }
}
</style>
