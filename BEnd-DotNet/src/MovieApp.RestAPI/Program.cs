

using MovieApp.Core.Service;
using MovieApp.DB;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy ("Policyl",
                        builder =>
                        {
                            builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
                        });
});


// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<IMovieCommentStorageService, MySqlStorageMovieService>();
builder.Services.AddSingleton<MovieCommentApplicationService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("Policyl");
app.UseAuthorization();

app.MapControllers();

app.Run();
