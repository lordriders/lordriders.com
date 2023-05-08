
k=0
for i in range(1, 4):
    print('\t\t<div class="col-lg-4 col-md-12 mb-4 mb-lg-0">')
    for j in range(1, 5):
        k+=1
        print(f"""
            <picture>
                <source srcset="media/gallery/p{k}/p{k}_1440w.webp 1440w,
                            media/gallery/p{k}/p{k}_700w.webp 700w,
                            media/gallery/p{k}/p{k}_520w.webp 520w,
                            media/gallery/p{k}/p{k}_420w.webp 420w,
                            media/gallery/p{k}/p{k}_300w.webp 300w"
                        sizes="(min-width: 992px) 33vw, 100vw"
                        type="image/webp">
                <!--fallback compatibility-->
                <img src="media/gallery/p{k}/p{k}.jpg" alt="" class="w-100 shadow-1-strong rounded mb-4 gallery-img"/>
            </picture>
        """)
    print("\t\t</div>")
