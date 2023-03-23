transformNamesOfFields(data: TimelineResponseDTO): void {
     this.dto.timelineDTO = data?.timelineDTO;
     this.dto.resultList = data?.resultList.map(object => {
       return {
        title: object[Object.keys(object)[0]],
        body: object[Object.keys(object)[1]],
        icon: object[Object.keys(object)[2]],
        color: object[Object.keys(object)[3]]
      };
    })
    console.log(this.dto)
  }
